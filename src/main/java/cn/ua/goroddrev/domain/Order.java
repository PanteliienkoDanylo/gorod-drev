package cn.ua.goroddrev.domain;

import java.util.Date;
import java.util.List;

public class Order {

    private String id;
    private Client client;
    private Date formationDate;
    private Date sendingDate;
    private String city;
    private String company;
    private String phoneNumber;
    private String email;
    private List<Product> products;
}
