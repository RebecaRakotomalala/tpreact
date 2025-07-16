<?php

// src/Entity/Client.php
namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Client
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: "id_client", type: "integer")]
    private $id_client;

    #[ORM\Column(type: "string", length: 255)]
    private $nom_client;

    // Getters / setters

    public function getId(): ?int
    {
        return $this->id_client;
    }

    public function getNomClient(): ?string
    {
        return $this->nom_client;
    }

    public function setNomClient(string $nom): self
    {
        $this->nom_client = $nom;
        return $this;
    }
}

