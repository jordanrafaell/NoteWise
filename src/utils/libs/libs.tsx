// libs.tsx
import { PaperProvider, withTheme, Searchbar, Card } from 'react-native-paper';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { Slot, Link } from 'expo-router';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Libs = {
  PaperProvider,
  withTheme,
  Searchbar,
  Constants,
  Ionicons,
  Card,
  Slot,
  Link,
  useState,
  NavigationContainer,
  createStackNavigator,
  AsyncStorage,
  React,
};

export default Libs;
