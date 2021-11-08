using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Models;
using System.Net.Mail;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoVerificationController : ControllerBase
    {
        private readonly TodoContext _context;

        public TodoVerificationController(TodoContext context)
        {
            _context = context;
        }

        // GET: api/TodoItems
        
        [HttpGet]
         public async Task<ActionResult<IEnumerable<TodoVerification>>> GetTodoItems()
        {
            return await _context.TodoVerifications.ToListAsync();
        }
        



        // GET: api/TodoItems/5
        /*
        [HttpGet("{id}")]
        public async Task<ActionResult<TodoItem>> GetTodoItem(long id)
        {
            var todoItem = await _context.TodoItems.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            return todoItem;
        }
        */

        // PUT: api/TodoItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        /*
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodoItem(long id, TodoItem todoItem)
        {
            if (id != todoItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(todoItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        */

        // POST: api/TodoItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ContentResult PostTodoVerificaction(TodoVerification todoVerification)
        {
            Random myObject = new Random();
            long ranNum = myObject.Next(100000, 999999);
            todoVerification.code= ranNum;
            todoVerification.Date = DateTime.Now;

            _context.TodoVerifications.Add(todoVerification);
            _context.SaveChangesAsync();

             string EmailOrigen = "drvz2258920@gmail.com";
            string EmailDestino = "danielviscarraz@hotmail.com";
            string contrasena = "evnphwhiwemqymct";


            MailMessage oMailMessage = new MailMessage(EmailOrigen,EmailDestino,"Hola XD","<p>Este es su codigo de verificacion </p>"+ ranNum);
            oMailMessage.IsBodyHtml = true;

            SmtpClient oSmtpClient = new SmtpClient("smtp.gmail.com");
            oSmtpClient.EnableSsl = true;
            oSmtpClient.UseDefaultCredentials = false;
            oSmtpClient.Port = 587;
            oSmtpClient.Credentials = new System.Net.NetworkCredential(EmailOrigen,contrasena);
            oSmtpClient.Send(oMailMessage);
            oSmtpClient.Dispose();
            //Fin de correo
            return Content("Correo enviado");


          



        }

        // DELETE: api/TodoItems/5
        /*
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodoItem(long id)
        {
            var todoItem = await _context.TodoItems.FindAsync(id);
            if (todoItem == null)
            {
                return NotFound();
            }

            _context.TodoItems.Remove(todoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        */
 
        /*
        private bool TodoItemExists(long id)
        {
            return _context.TodoItems.Any(e => e.Id == id);
        }
        */
    }
}