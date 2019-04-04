package edu.pucmm.dhamarmj.Services;

import edu.pucmm.dhamarmj.Encapsulation.Form_User;

public class Form_UserServices extends DatabaseServices<Form_User> {

    private static Form_UserServices instancia;
    private Form_UserServices() {
        super(Form_User.class);
    }

    public static Form_UserServices getInstancia() {
        if (instancia == null) {
            instancia = new Form_UserServices();
        }
        return instancia;
    }

}
