const Rol = require("...Modelos/roles");

const createRoles = async() => {
    const count = await Rol.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
        new Rol ({name: "user"}).save(),
        new Rol ({name: "admin"}).save(),
    ]);
    consol.log(values);
}