package edu.pucmm.dhamarmj.Handler;

import com.google.gson.Gson;
import edu.pucmm.dhamarmj.Encapsulation.Form_User;
import edu.pucmm.dhamarmj.Services.Form_UserServices;
import edu.pucmm.dhamarmj.Services.JsonUtilitario;
import freemarker.template.Configuration;
import spark.ModelAndView;
import spark.template.freemarker.FreeMarkerEngine;

import java.io.ByteArrayOutputStream;
import java.text.Normalizer;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static spark.Spark.*;

public class MainHandler {
    public MainHandler() {
        gson = new Gson();
    }
    Gson gson;
    public final static String ACCEPT_TYPE_JSON = "application/json";

    public void startup() {
        staticFiles.location("/publico");

        Configuration configuration = new Configuration(Configuration.VERSION_2_3_23);
        configuration.setClassForTemplateLoading(MainHandler.class, "/templates");
        FreeMarkerEngine freeMarkerEngine = new FreeMarkerEngine(configuration);

        get("/", (request, response) -> {

            return new ModelAndView(null, "form.ftl");
        }, freeMarkerEngine);
        get("/Formularios", (request, response) -> {
            return new ModelAndView(null, "savedItems.ftl");
        }, freeMarkerEngine);

        post("/submit", (request, response) -> {
            Gson gson = new Gson();
            Form_User fu = gson.fromJson(request.body(), Form_User.class);
            fu.setId(0);
            Form_UserServices.getInstancia().crear(fu);
            return new ModelAndView(null, "form.ftl");
        }, freeMarkerEngine);

        get("/rest/forms",(request, response) -> {
            List<Form_User> form = Form_UserServices.getInstancia().findAll();
            System.out.printf(form.size() + " ");
            response.header("Content-Type", "application/json");
            return form;
        }, JsonUtilitario.json());
    }
}
