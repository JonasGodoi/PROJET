package com.example.gcvas.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = Filiado.TABLE_NAME)
@AllArgsConstructor
public class Filiado {

    public static final String TABLE_NAME = "Filiado";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CodF", nullable = false, unique = true, length = 10)
    @Size(min = 10)
    private Long id;

    @Column(name = "username", unique = true, nullable = false, insertable = true, updatable =false, length = 50 )
    @NotBlank
    @Size(min = 2, max = 50)
    private String username;

    @Column(name = "CPF", unique = true, nullable = false, insertable = true, updatable =false, length = 11 )
    @NotBlank
    @Size(min = 11, max =11)
    private String cpf;

    @Column(name = "Data_Nascimento", unique = false, nullable = false, insertable = true, updatable =false, length = 8 )
    @NotNull
    @Size(min = 8, max = 8)
    private Integer data;

   @ManyToOne
   @JoinColumn(name = "cod_nis", unique = false, nullable = false, insertable = true, updatable =false)
    private Beneficiario beneficiario;
}
