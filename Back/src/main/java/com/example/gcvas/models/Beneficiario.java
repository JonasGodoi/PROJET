package com.example.gcvas.models;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity
@Data
@Table(name = Beneficiario.TABLE_NAME)
@AllArgsConstructor

public class Beneficiario {

    public static final String TABLE_NAME = "Beneficiario";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cod_nis", nullable = false, unique = true, length = 11)
    @Size(min = 11, max = 11)
    @NotNull(message = "O número de Nis é necessário")
    private Long id;

    @Column(name = "username", unique = true, nullable = false, insertable = true, updatable =false, length = 50 )
    @NotBlank
    @Size(min = 2, max = 50)
    private String username;

    @Column(name = "Endereco", unique = false, nullable = false, insertable = true, updatable =true, length = 50 )
    @NotBlank
    @Size(min = 5, max = 50)
    private String endereco;

    @Column(name = "CPF", unique = true, nullable = false, insertable = true, updatable =false, length = 11 )
    @NotBlank
    @Size(min = 11, max =11)
    private String cpf;

    @Column(name = "Telefone", unique = true, nullable = false, insertable = true, updatable =true, length = 11 )
    @NotBlank
    @Size(min = 8, max = 11)
    private String telefone;

    @ManyToMany
    @JoinTable(
        name = "BeneficiadoBeneficio",
        joinColumns = @JoinColumn(name = "cod_nis"),
        inverseJoinColumns = @JoinColumn(name = "CodB"))
    Set<Beneficios>   beneficiadoBeneficio; 

    


}
