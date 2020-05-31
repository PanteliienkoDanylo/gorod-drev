package cn.ua.goroddrev.controller;

import cn.ua.goroddrev.domain.Master;
import cn.ua.goroddrev.service.MasterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MasterController {

    private final MasterService masterService;

    @Autowired
    public MasterController(MasterService masterService) {
        this.masterService = masterService;
    }

    @GetMapping("/masters")
    public ResponseEntity<List<Master>> getAllMasters() {
        return ResponseEntity.ok(masterService.findAllMasters());
    }
}
