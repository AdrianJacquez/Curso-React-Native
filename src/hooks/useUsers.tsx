import { useEffect, useState, useRef } from "react";
import axios from "axios";
import type { ReqResUserListResponse, User } from "../interfaces";

export const useUsers = () => {
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  const loadUsers = async (page: number): Promise<User[]> => {
    try {
      const { data } = await axios.get<ReqResUserListResponse>(
        `https://reqres.in/api/users?page=${page}`
      );

      return data.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    loadUsers(currentPageRef.current).then(setUsuarios);
  }, []);

  const nextPage = async () => {
    currentPageRef.current++;
    const users = await loadUsers(currentPageRef.current);
    if (users.length > 0) {
      setUsuarios(users);
    } else {
      currentPageRef.current--;
    }
  };

  const prevPage = async () => {
    if (currentPageRef.current < 1) return;

    currentPageRef.current--;
    const users = await loadUsers(currentPageRef.current);
    setUsuarios(users);
  };

  return {
    //PROPERTIES
    usuarios,
    setUsuarios,
    currentPageRef,
    //METODOS
    nextPage,
    prevPage,
  };
};
