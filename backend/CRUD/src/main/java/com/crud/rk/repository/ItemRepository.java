package com.crud.rk.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crud.rk.model.Item;

public interface ItemRepository extends JpaRepository<Item, Long>{

}
