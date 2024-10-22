package com.example.gcvas.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gcvas.models.Rma;
import com.example.gcvas.repositories.RmaRepository;

import jakarta.transaction.Transactional;

@Service
public class RmaService {

@Autowired
    private RmaRepository rmaRepository; // Certifique-se de que isso está corretamente injetado

    public List<Rma> findByMes(String mes) {
        return rmaRepository.findByMes(mes); // Certifique-se de que o repositório tem esse método
    }


    public List<Rma> findAll() {
        return rmaRepository.findAll();
    }

    public Rma findByid(Long id) {

       Optional<Rma> obj = this.rmaRepository.findById(id);

        if(obj.isPresent()){
            return obj.get();
        }
        throw new RuntimeException("Rma não encontrado {id:"+id+"} ");
    }

    @Transactional
    public Rma create(Rma obj){
        obj.setId(null);

       return  this.rmaRepository.save(obj);
    }

    @Transactional
    public Rma update(Rma newObj){

        Rma obj =  this.findByid(newObj.getId());

        obj.setEndereco(newObj.getEndereco());
        obj.setMunicipio(newObj.getMunicipio());
  
          return this.rmaRepository.save(obj);
  
      }


      public void deleteByid(Long id){
        try {
            this.rmaRepository.deleteById(id);
        } catch (Exception e) {
        }
    }

    
}