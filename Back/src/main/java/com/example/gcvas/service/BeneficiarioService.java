package com.example.gcvas.service;

import java.util.Optional;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gcvas.models.Beneficiario;
import com.example.gcvas.repositories.BeneficiarioRepository;

import jakarta.transaction.Transactional;

@Service
public class BeneficiarioService {
    
    @Autowired
    BeneficiarioRepository beneficiarioRepository;

    public List<Beneficiario> findAll() {
        return beneficiarioRepository.findAll();
    }


    public Beneficiario findByid(Long id) {

       Optional<Beneficiario> obj = this.beneficiarioRepository.findById(id);

        if(obj.isPresent()){
            return obj.get();
        }
        throw new RuntimeException("Beneficiario não encontrado {id:"+id+"} ");
    }

    @Transactional
    public Beneficiario create(Beneficiario obj){
        obj.setId(null);

       return  this.beneficiarioRepository.save(obj);
    }

    @Transactional
    public Beneficiario update(Beneficiario newObj){

        Beneficiario obj =  this.findByid(newObj.getId());

        obj.setTelefone(newObj.getTelefone());
        obj.setEndereco(newObj.getEndereco());
  
          return this.beneficiarioRepository.save(obj);
  
      }

      public void deleteByid(Long id){
        try {
            this.beneficiarioRepository.deleteById(id);
        } catch (Exception e) {
        }
    }

}
