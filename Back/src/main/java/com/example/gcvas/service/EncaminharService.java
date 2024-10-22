package com.example.gcvas.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gcvas.models.Encaminhar;
import com.example.gcvas.repositories.EncaminharRepository;

import jakarta.transaction.Transactional;



@Service
public class EncaminharService {
    
    @Autowired
    EncaminharRepository encaminharRepository;

    public List<Encaminhar> findAll() {
        return encaminharRepository.findAll();
    }

    public Encaminhar findByid(Long id) {

        Optional<Encaminhar> obj = this.encaminharRepository.findById(id);
 
         if(obj.isPresent()){
             return obj.get();
         }
         throw new RuntimeException("Encaminhar não encontrado {id:"+id+"} ");
     }

      @Transactional
    public Encaminhar create(Encaminhar obj){
        obj.setId(null);

       return  this.encaminharRepository.save(obj);
    }

    @Transactional
    public Encaminhar update(Encaminhar newObj){

        Encaminhar obj =  this.findByid(newObj.getId());

        
        obj.setTelefone(newObj.getTelefone());
        obj.setEndereco(newObj.getEndereco());
        obj.setSetor(newObj.getSetor());
        
        
        return this.encaminharRepository.save(obj);
  
      }

      public void deleteByid(Long id){
        try {
            this.encaminharRepository.deleteById(id);
        } catch (Exception e) {
        }
    }

}