package edu.pucmm.dhamarmj.Handler;

import com.google.gson.Gson;
import edu.pucmm.dhamarmj.Encapsulation.Form_User;
import edu.pucmm.dhamarmj.Services.Form_UserServices;
import freemarker.template.Configuration;
import spark.ModelAndView;
import spark.template.freemarker.FreeMarkerEngine;

import java.util.List;
import java.util.Map;

import static spark.Spark.*;

public class MainHandler {
    public MainHandler() {

    }

    public void startup() {
        staticFiles.location("/publico");

        Configuration configuration = new Configuration(Configuration.VERSION_2_3_23);
        configuration.setClassForTemplateLoading(MainHandler.class, "/templates");
        FreeMarkerEngine freeMarkerEngine = new FreeMarkerEngine(configuration);

        get("/", (request, response) -> {
           return new ModelAndView(null, "form.ftl");
        }, freeMarkerEngine);

        post("/submit", (request, response) -> {
            Gson gson = new Gson();
            Form_User fu = gson.fromJson(request.body(),Form_User.class);
            Form_UserServices.getInstancia().crear(fu);
            return new ModelAndView(null, "form.ftl");
        }, freeMarkerEngine);

//        get("/see", (request, response) -> {
//
////            Gson gson = new Gson();
////            Form_User fu = gson.fromJson(request.body(),Form_User.class);
////            Form_UserServices.getInstancia().crear(fu);
////            return new ModelAndView(null, "form.ftl");
//        }, freeMarkerEngine);

//        get("/submit", (request, response) -> {
//            return null;
//        });



    }

}
