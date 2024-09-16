package com.example.gcvas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.gcvas.models.Beneficiario;

@Repository
public interface BeneficiarioRepository  extends JpaRepository<Beneficiario, Long> {
 
     

}
