using System;
namespace TodoApi.Models
{
    public class TodoVerification
    {
        public long Id { get; set; }
        public long code { get; set; }
        public string Name { get; set; }
        public DateTime Date {get; set;}

    }
}