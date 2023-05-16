"use client";
import { Client, Account ,Databases } from "appwrite";
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("646172c314ed79789106");

export const account = new Account(client);

export const databases = new Databases(client,"64618f1a3234466eef99");