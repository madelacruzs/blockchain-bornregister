const Registry = require('../models').Registry;
const Registrant = require('../models').Registrant;

module.exports = {
  getByNameRegistry(req, res) {
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
  getByNameRegistrant(req, res) {
    return Registrant
      .findByName(req.params.name, {
        attributes: ['id', 'name', 'lastname','secondlastname','birthdate', 'bcaddress', 'fingerprint' ]
      })
      .then((registrant) => {
        if (!registrant) {
          return res.status(404).send({
            message: 'Registrant Not Found',
          });
        }
        return res.status(200).send(registrant);
      })
      .catch((error) => res.status(400).send(error));
  },   
  addRegistry(req, res) {      
    var idFirstRegistrant, idSecondRegistrant;
    Registrant
      .create({
        name: req.body.fullName_Mother,
        lastname: "",
        secondlastname: "",
        birthdate: Date.now(),
        bcaddress: "0x",
        fingerprint: req.body.fingerprint
      })
      .then((registrant) => idFirstRegistrant = registrant.idregistrant);
    Registrant
      .create({
        name: req.body.fullName_Father,
        lastname: "",
        secondlastname: "",
        birthdate: Date.now(),
        bcaddress: "0x",
        fingerprint: req.body.fingerprint
      })
      .then((registrant) => idSecondRegistrant = registrant.idregistrant);
    Registry
      .create({
        name: req.body.name,
        idregistrant: idFirstRegistrant,
        idsecondregistrant: idSecondRegistrant,
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
  }
};