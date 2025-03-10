import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  navigation?: any;
}

const Header: React.FC<HeaderProps> = ({title, showBack, navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        {showBack && (
          <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backButton}>
            <Image source={require('../assets/images/back-arrow.png')} style={styles.backIcon} />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00AEEF',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  backButton: {
    position: 'absolute',
    left: 15,
  },
  backIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default Header;
