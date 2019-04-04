package edu.pucmm.dhamarmj.Encapsulation;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Form_User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String sector;
    private String education;
    //        Basico, Medio, Universitario, Postgrado, Doctorado;

    public Form_User() {

    }


    public Form_User(String name, String sector, String education) {
        this.name = name;
        this.sector = sector;
        this.education = education;
    }

    public long getId() {
        return this.id;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

}
