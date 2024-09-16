package com.example.gcvas.service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.gcvas.Security.UserSpringSecurity;
import com.example.gcvas.models.Enums.TipoUser;
import com.example.gcvas.models.User;
import com.example.gcvas.repositories.UserRepository;
import com.example.gcvas.service.exceptions.AuthorizationException;
import com.example.gcvas.service.exceptions.DataBindingViolationException;
import com.example.gcvas.service.exceptions.ObjectNotFoundException;

import jakarta.transaction.Transactional;



@Service
public class UserService {

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    
    @Autowired  
    UserRepository userRepository;  

    public List<User> findAll() {
        return userRepository.findAll();
    }

    
    public User findById(Long id) {
       // VerificaADM();

        Optional<User> obj = this.userRepository.findById(id);
        if (obj.isPresent()) {
            return obj.get();
        }
        throw new ObjectNotFoundException("Usuario não encontrado {id:" + id + "}");
    }


    public void VerificaADM() {
        UserSpringSecurity userSpringSecurity = authenticated();
        if (!Objects.nonNull(userSpringSecurity)
                || !userSpringSecurity.hasRole(TipoUser.ADM))
            throw new AuthorizationException("Acesso negado!");
    }

    @Transactional
    public User create(User obj){
        //VerificaADM();
        obj.setId(null);
        obj.setPassword(this.bCryptPasswordEncoder.encode(obj.getPassword()));
       return  this.userRepository.save(obj);
    }

    @Transactional
    public User update(User newObj){

      User obj =  this.findById(newObj.getId());

        obj.setPassword(newObj.getPassword());
        obj.setPassword(this.bCryptPasswordEncoder.encode(newObj.getPassword()));

        return this.userRepository.save(obj);

    }

    public void deleteByid(Long id){
        try {
            this.userRepository.deleteById(id);
        } catch (Exception e) {
            throw new DataBindingViolationException(
                    "Não é possível excluir o usuário {id:" + id + "} pois possui entidades relacionadas");
        }
    }

    public UserSpringSecurity authenticated() {
        try {
            return (UserSpringSecurity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        } catch (Exception e) {
            return null;
        }
    }
    
}
