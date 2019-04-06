package edu.pucmm.dhamarmj.Encapsulation;

import com.sun.istack.NotNull;

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
    @Column(nullable = true)
    private double latitude;
    @Column(nullable = true)
    private double longitude;
    //        Basico, Medio, Universitario, Postgrado, Doctorado;

    public Form_User() {

    }

    public Form_User(String name, String sector, String education, double latitude, double longitude) {
        this.name = name;
        this.sector = sector;
        this.education = education;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public void setId(long id) {
        this.id = id;
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

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

}
