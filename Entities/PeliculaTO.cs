using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class PeliculaTO
    {
        public long PeliculaId { get; set; }
        public string Titulo { get; set; }
        public string Descripcion { get; set; }
        public string Actores { get; set; }
        public string Director { get; set; }
        public decimal? Costo { get; set; }
        public int? Cantidad { get; set; }
    }
}
