using Datos;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PeliculaController : ApiController
    {
        public IEnumerable<PeliculaTO> Get()
        {
            List<PeliculaTO> peliculas = new List<PeliculaTO>();
            using (videoBlockEntities _context = new videoBlockEntities())
            {
                peliculas = _context.Peliculas
                                        .ToList()
                                        .ConvertAll(r => new PeliculaTO
                                        {
                                            PeliculaId = r.PeliculaId,
                                            Titulo = r.Titulo,
                                            Descripcion = r.Descripcion,
                                            Actores = r.Actores,
                                            Director = r.Director,
                                            Costo = r.Costo,
                                            Cantidad = r.Cantidad,

                                        });
            }

            return peliculas;
        }
    }
}
