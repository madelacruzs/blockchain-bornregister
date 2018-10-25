const Hospital = require('../models').Hospital;

module.exports = {
  list(req, res) {
    return Hospital
      .findAll({
        attributes: ['id', 'name', 'rfc', 'registrynumber', 'phone', 'address', 'bcaddress']
      })
      .then((hospitals) => res.status(200).send(hospitals))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Hospital
      .findById(req.params.id,{
        attributes: ['id', 'name', 'rfc', 'registrynumber', 'phone', 'address', 'bcaddress']
      })
      .then((hospital) => {
        if (!hospital) {
          return res.status(404).send({
            message: 'Hospital Not Found',
          });
        }
        return res.status(200).send(hospital);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Hospital
      .create({
        name: req.body.name,
        rfc: req.body.rfc,
        registrynumber: req.body.registrynumber,
        phone: req.body.phone,
        address: req.body.address,
        bcaddress: req.body.bcaddress
      })
      .then((hospital) => res.status(201).send(hospital))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Hospital
      .findById(req.params.id)
      .then(hospital => {
        if (!hospital) {
          return res.status(404).send({
            message: 'Hospital Not Found',
          });
        }
        return hospital
          .update({
            name: req.body.name || hospital.name,
            rfc: req.body.rfc || hospital.rfc,
            registrynumber: req.body.registrynumber || hospital.registrynumber,
            phone: req.body.phone || hospital.phone,
            address: req.body.address || hospital.address,
            bcaddress: req.body.bcaddress || hospital.bcaddress
          })
          .then(() => res.status(200).send(hospital))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Hospital
      .findById(req.params.id)
      .then(hospital => {
        if (!hospital) {
          return res.status(400).send({
            message: 'Hospital Not Found',
          });
        }
        return hospital
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};