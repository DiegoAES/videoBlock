using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class ReservaTO
    {
        public long ReservaId { get; set; }
        public long? ClienteId { get; set; }
        public string NombreCliente { get; set; }  
        public long? PeliculaId { get; set; }
        public string TituloPelicula { get; set; }
        public DateTime? Fecha { get; set; }
    }
}
