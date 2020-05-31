package cn.ua.goroddrev.dto;

import java.util.List;

public class TableApi<T> {

    private List<T> data;
    private long totalCount;

    public TableApi(List<T> data, long totalCount) {
        this.data = data;
        this.totalCount = totalCount;
    }

    public List<T> getData() {
        return data;
    }

    public void setData(List<T> data) {
        this.data = data;
    }

    public long getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(long totalCount) {
        this.totalCount = totalCount;
    }
}
