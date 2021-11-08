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
    public class TodoComprobacionController : ControllerBase
    {
        private readonly TodoContext _context;

        public TodoComprobacionController(TodoContext context)
        {
            _context = context;
        }

        // GET: api/TodoItems
        
       
        

        // POST: api/TodoItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ContentResult PostTodoVerificaction(TodoComprobacion todoComprobacion)
        {
            var enviado = _context.TodoVerifications.Find(todoComprobacion.numberi);
            if(enviado == null){
                return Content("Not find");
            }
            else{
                if(enviado.code == todoComprobacion.code){
                    DateTime theday = DateTime.Now;
                    double hl = theday.Subtract(enviado.Date).TotalMinutes;
                    if(hl>3.00){
                        return Content("Su codigo ha expirado "+hl.ToString());
                    }
                    else
                    {
                        return Content("Codigo correcto. Su contraseña es: xxxxxxxxx");
                    }
                    
                }
                else{
                    return Content("Codigo incorrecto");
                }
            }
            //Fin de correo
            


          



        }

        
    }
}