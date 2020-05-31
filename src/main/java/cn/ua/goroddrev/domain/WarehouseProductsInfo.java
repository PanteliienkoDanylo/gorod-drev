package cn.ua.goroddrev.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "warehouse_product_info")
public class WarehouseProductsInfo implements Serializable {

    @JsonIgnore
    @Id
    @ManyToOne
    @JoinColumn(name = "warehouse_id")
    private Warehouse warehouse;

    @Id
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "total_count")
    private Integer totalCount;

    @Column(name = "booked_count")
    private Integer bookedCount;

    @Column(name = "left_count")
    private Integer leftCount;

    @Column(name = "last_delivery_date")
    private Date lastDeliveryDate;

    public Warehouse getWarehouse() {
        return warehouse;
    }

    public void setWarehouse(Warehouse warehouse) {
        this.warehouse = warehouse;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
    }

    public Integer getBookedCount() {
        return bookedCount;
    }

    public void setBookedCount(Integer bookedCount) {
        this.bookedCount = bookedCount;
    }

    public Integer getLeftCount() {
        return leftCount;
    }

    public void setLeftCount(Integer leftCount) {
        this.leftCount = leftCount;
    }

    public Date getLastDeliveryDate() {
        return lastDeliveryDate;
    }

    public void setLastDeliveryDate(Date lastDeliveryDate) {
        this.lastDeliveryDate = lastDeliveryDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        WarehouseProductsInfo that = (WarehouseProductsInfo) o;
        return Objects.equals(warehouse, that.warehouse) &&
                Objects.equals(product, that.product) &&
                Objects.equals(totalCount, that.totalCount) &&
                Objects.equals(bookedCount, that.bookedCount) &&
                Objects.equals(leftCount, that.leftCount) &&
                Objects.equals(lastDeliveryDate, that.lastDeliveryDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(warehouse, product, totalCount, bookedCount, leftCount, lastDeliveryDate);
    }
}
