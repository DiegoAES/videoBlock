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
    public class ClienteController : ApiController
    {

        // GET api/<controller>
        public IEnumerable<ClienteTO> Get()
        {
            List<ClienteTO> clientes = new List<ClienteTO>();
            using (videoBlockEntities _context = new videoBlockEntities())
            {
                clientes = _context.Clientes
                                        .ToList()
                                        .ConvertAll(r => new ClienteTO
                                        {
                                            Celular = r.Celular,
                                            ClienteId = r.ClienteId,
                                            Direccion = r.Direccion,
                                            Documento = r.Documento,
                                            Email = r.Email,
                                            PrimerApellido = r.PrimerApellido,
                                            PrimerNombre = r.PrimerNombre,
                                            SegundoApellido = r.SegundoApellido,
                                            SegundoNombre = r.SegundoNombre,
                                            TipoDocumento = r.TipoDocumento,
                                            EsAdministrador = r.esAdministrador,
                                            Password = r.password
                                        });
            }

            return clientes;
        }

        // GET api/<controller>/5
        public ClienteTO Get(int id)
        {
            ClienteTO cliente = new ClienteTO();

            using (videoBlockEntities _context = new videoBlockEntities())
            {
                var r = _context.Clientes.Find(id);
                cliente = new ClienteTO
                {
                    Celular = r.Celular,
                    ClienteId = r.ClienteId,
                    Direccion = r.Direccion,
                    Documento = r.Documento,
                    Email = r.Email,
                    PrimerApellido = r.PrimerApellido,
                    PrimerNombre = r.PrimerNombre,
                    SegundoApellido = r.SegundoApellido,
                    SegundoNombre = r.SegundoNombre,
                    TipoDocumento = r.TipoDocumento,
                    EsAdministrador = r.esAdministrador,
                    Password = r.password
                };
            }

            return cliente;
        }

        // POST api/<controller>
        [HttpPost]
        [Route("Guardar")]
        public void Guardar([FromBody] Cliente pCliente)
        {
            using (videoBlockEntities _context = new videoBlockEntities())
            {
                _context.Clientes.Add(pCliente);
                _context.SaveChanges();
            }
        }

        [HttpPost]
        [ActionName("LogIn")]
        public ClienteTO LogIn([FromBody] Cliente pCliente)
        {
            ClienteTO cliente = null;
            using (videoBlockEntities _context = new videoBlockEntities())
            {
                Cliente r = _context.Clientes
                                       .Where(c => c.Documento == pCliente.Documento && c.password == pCliente.password)
                                       .FirstOrDefault();
                if (r != null)
                {
                    cliente = new ClienteTO
                    {
                        Celular = r.Celular,
                        ClienteId = r.ClienteId,
                        Direccion = r.Direccion,
                        Documento = r.Documento,
                        Email = r.Email,
                        PrimerApellido = r.PrimerApellido,
                        PrimerNombre = r.PrimerNombre,
                        SegundoApellido = r.SegundoApellido,
                        SegundoNombre = r.SegundoNombre,
                        TipoDocumento = r.TipoDocumento,
                        EsAdministrador = r.esAdministrador,
                        Password = r.password
                    };

                }

            }

            return cliente;
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] Cliente pCliente)
        {
            using (videoBlockEntities _context = new videoBlockEntities())
            {
                Cliente cliente = _context.Clientes.Find(id);

                if (cliente != null)
                {
                    cliente.Celular = pCliente.Celular;
                    cliente.Direccion = pCliente.Direccion;
                    cliente.Documento = pCliente.Documento;
                    cliente.Email = pCliente.Email;
                    cliente.PrimerApellido = pCliente.PrimerApellido;
                    cliente.PrimerNombre = pCliente.PrimerNombre;
                    cliente.SegundoApellido = pCliente.SegundoApellido;
                    cliente.SegundoNombre = pCliente.SegundoNombre;
                    cliente.TipoDocumento = pCliente.TipoDocumento;
                    cliente.password = pCliente.password;
                    cliente.esAdministrador = pCliente.esAdministrador;

                    _context.SaveChanges();
                }
            }
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            using (videoBlockEntities _context = new videoBlockEntities())
            {
                Cliente cliente = _context.Clientes.Find(id);

                _context.Clientes.Remove(cliente);
                _context.SaveChanges();
            }
        }
    }

}
