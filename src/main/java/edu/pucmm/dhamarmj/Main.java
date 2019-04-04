package edu.pucmm.dhamarmj;

import edu.pucmm.dhamarmj.Encapsulation.Form_User;
import edu.pucmm.dhamarmj.Handler.MainHandler;
import edu.pucmm.dhamarmj.Services.DatabaseServices;
import edu.pucmm.dhamarmj.Services.Form_UserServices;
import edu.pucmm.dhamarmj.Services.StartDatabase;

import java.nio.charset.MalformedInputException;

public class Main {
    public static void main(String[] args) {

        StartDatabase.getInstancia().startDb();
        new MainHandler().startup();
    }
}
