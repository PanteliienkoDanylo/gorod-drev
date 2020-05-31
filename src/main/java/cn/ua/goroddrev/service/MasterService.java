package cn.ua.goroddrev.service;

import cn.ua.goroddrev.domain.Master;
import cn.ua.goroddrev.repository.MasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MasterService {

    private final MasterRepository masterRepository;

    @Autowired
    public MasterService(MasterRepository masterRepository) {
        this.masterRepository = masterRepository;
    }

    public List<Master> findAllMasters() {
        return masterRepository.findAll();
    }

    public void addMaster(Master master) {
        masterRepository.saveAndFlush(master);
    }
}
