const Registry = require('../models').Registry;
const Registrant = require('../models').Registrant;

module.exports = {
  getByName(req, res) {
    return Registry
      .findByName(req.params.name, {
        attributes: ['id', 'name', 'idregistrant','idsecondregistrant','idhospital','iddoctor','hashfingerprint', 
                    'datetime', 'bcaddress', 'fingerprint', 'sex', 'address', 'nationality', 'registrantfingerprint',
                    'secondregisterfingerprint' ]
      })
      .then((registry) => {
        if (!registry) {
          return res.status(404).send({
            message: 'Registry Not Found',
          });
        }
        return res.status(200).send(registry);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Registry
      .create({
        // id: req.body.id,
        name: req.body.name,
        idregistrant: req.body.idregistrant,
        idsecondregistrant:req.body.idsecondregistrant,
        idhospital: req.body.idhospital,
        iddoctor: req.body.iddoctor,
        hashfingerprint: req.body.hashfingerprint,
        datetime: req.body.datetime,
        bcaddress: req.body.bcaddress,
        fingerprint: req.body.fingerprint,
        sex: req.body.sex,
        address: req.body.address,
        nationality: req.body.nationality,
        registrantfingerprint: req.body.registrantfingerprint,
        secondregisterfingerprint: req.body.secondregisterfingerprint,
      })
      .then((registry) => res.status(201).send(registry))
      .catch((error) => res.status(400).send(error));
  },
};