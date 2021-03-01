using Datos;
using Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ReservaController : ApiController
    {
        // PUT api/<controller>/5
        public void Post([FromBody] Reserva pReserva)
        {
            using (videoBlockEntities _context = new videoBlockEntities())
            {
                pReserva.Fecha = DateTime.Now;

                _context.Reservas.Add(pReserva);

                Pelicula pelicula = _context.Peliculas.Find(pReserva.PeliculaId);

                pelicula.Cantidad = pelicula.Cantidad - 1;

                _context.SaveChanges();
                
            }
        }

        // GET api/<controller>/5
        public IEnumerable<ReservaTO> Get( int id)
        {
            List<ReservaTO> reservas = new List<ReservaTO>();
            using (videoBlockEntities _context = new videoBlockEntities())
            {
                reservas = _context.Reservas
                                        .Where( r => r.ClienteId == id )
                                        .Include( r => r.Pelicula )
                                        .Include( r => r.Cliente )
                                        .ToList()
                                        .ConvertAll(r => new ReservaTO
                                        {
                                            ClienteId = r.ClienteId,
                                            NombreCliente = string.Concat( r.Cliente.PrimerNombre, r.Cliente.PrimerApellido ),
                                            Fecha = r.Fecha,
                                            PeliculaId = r.PeliculaId,
                                            TituloPelicula = r.Pelicula.Titulo,
                                            ReservaId = r.ReservaId

                                        });
            }

            return reservas;
        }

    }
}
