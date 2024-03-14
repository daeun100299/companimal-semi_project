package com.companimal.semiProject.project.model.service;

import com.companimal.semiProject.project.model.dto.ProjectDTO;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ProjectService {

    List<ProjectDTO> selectAllProject();

    ProjectDTO selectProject();

    @Transactional
    void insertProject(MultipartFile file, ProjectDTO project) throws IOException;

    ProjectDTO selectProjectDetail(int proCode);

    List<ProjectDTO> selectEndProjectList();

    List<ProjectDTO> selectSupportList(int id);

    @Transactional
    int updateShipment(ProjectDTO estDateDto);

    void insertImage(MultipartFile file);


//    List<ProjectDTO> selectCalculationList();
}
