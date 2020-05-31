package cn.ua.goroddrev.domain;

import cn.ua.goroddrev.domain.deserialize.MasterDeserializer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

//@JsonDeserialize(using = MasterDeserializer.class)
@Entity
@Table(name = "masters")
public class Master implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "phone_number")
    private String phoneNumber;

//    @JsonIgnore
//    @OneToMany(mappedBy = "master", fetch = FetchType.LAZY)
//    private Set<Product> products;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

//    public Set<Product> getProducts() {
//        return products;
//    }

//    public void setProducts(Set<Product> products) {
//        this.products = products;
//    }
}
