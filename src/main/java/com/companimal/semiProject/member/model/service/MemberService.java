package com.companimal.semiProject.member.model.service;

import com.companimal.semiProject.member.model.dao.MemberMapper;
import com.companimal.semiProject.member.model.dto.LoginMemberDTO;
import com.companimal.semiProject.member.model.dto.MemberDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Service
public class MemberService {

    @Autowired
    private MemberMapper memberMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public int registMember(MemberDTO memberDTO) {

        memberDTO.setMemberPwd(passwordEncoder.encode(memberDTO.getMemberPwd()));

        int result = 0;
        try {
            result = memberMapper.registMember(memberDTO);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return result;
    }

    public LoginMemberDTO findByMembername(String memberId) {

        LoginMemberDTO login = memberMapper.findByMemberName(memberId);


        if (!Objects.isNull(login)) {

            return login;
        } else {

            return null;
        }
    }

    public List<MemberDTO> selectParticipate(String id) {
        return memberMapper.selectParticipate(id);
    }


    @Transactional
    public int updatePurchaseConfirm(String orderCode) {
        int result = memberMapper.updatePurchaseConfirm(orderCode);

        return result;
    }

    public String selectMemId(String memName) {
        return memberMapper.selectMemId(memName);
    }

    public String registeredEmailCheckByName(String name) {
        return memberMapper.registeredEmailCheckByName(name);
    }

    public String registeredEmailCheckById(String memId) {
        return memberMapper.registeredEmailCheckById(memId);
    }

    @Transactional
    public void UpdatePassword(String memberPwd, String memId) {
        memberMapper.UpdatePassword(memId, passwordEncoder.encode(memberPwd));
    }

}
