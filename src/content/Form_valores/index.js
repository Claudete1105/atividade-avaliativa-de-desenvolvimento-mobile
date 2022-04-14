import React, {useState} from 'react'
import { Text, TextInput , View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style'; 

export default function Form_valores () {

  const [Primeirovalor, setPrimeirovalor] = useState('');
  const [Segundovalor, setSegundovalor] = useState('');
  const [Terceirovalor, setTerceirovalor] = useState('');
  const [total, setTotal] = useState(0);

  const x = parseFloat(total);
  const por = x ;

  function gerarResultado() {
      setTotal(Number(Primeirovalor) + Number(Segundovalor) + Number(Terceirovalor));
      Keyboard.dismiss();
  }

    return (

      <View style={styles.formContext}>
            <View style={styles.form}>


                 <TextInput 
                 style={styles.input}
                 value={Primeirovalor}
                 placeholder='Digite o primeiro valor.'
                 onChangeText={(int) => setPrimeirovalor(int)}
                 maxLength={5}
                 />
                 
                 
                 <TextInput
                   style={styles.input}
                   value={Segundovalor}
                   placeholder='Digite o segundo valor.'
                   onChangeText={(int) => setSegundovalor(int)}
                   maxLength={5}
                 />


                 <TextInput
                   style={styles.input}   
                   value={Terceirovalor}
                   placeholder='Digite o terceiro valor.'
                   onChangeText={(int) => setTerceirovalor(int)}
                   maxLength={5}
                 />

           <TouchableOpacity
            style={styles.buttonCalculator}
            activeOpacity={0.10}
            onPress={gerarResultado}>
            <Text style={styles.textbuttonCalculator}>Calcular Valores <Icon name="thumbs-o-up" size={30} color="#000" />
            </Text>
           </TouchableOpacity>
 
            </View>

            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 

          <View>
			      <Text style={styles.numberResult}>
				     	Soma dos Valores = 
				    	{' '}
				    	{total.toFixed(1)}
			     	</Text>
		    	</View>

			{por < 10 && por > 0 && (
				<Text style={styles.information}>Este numero está entre o intervalo de  0 a 10</Text>
			)}

			{por >= 11 && por < 20 && (
				<Text style={styles.information}>Este numero está entre o intervalo de 11 a 20</Text>
			)}

			{por >= 21 &&  (
				<Text style={styles.information}>Este numero está entre o intervalo de 21 a infinito</Text>
			)}

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

      </View>

    );
  }