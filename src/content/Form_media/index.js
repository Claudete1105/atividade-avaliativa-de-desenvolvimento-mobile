import React, {useState} from 'react'
import { Text, TextInput , View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style'; //importando o style

export default function Form_media () {

  const [Primeiranota, setPrimeiranota] = useState('');
  const [Segundanota, setSegundanota] = useState('');
  const [Terceiranota, setTerceiranota] = useState('');
  const [total, setTotal] = useState(0);

  const x = parseFloat(total);
  const por = x / 3;

  function gerarResultado() {
      setTotal(Number(Primeiranota) + Number(Segundanota) + Number(Terceiranota));
      Keyboard.dismiss();
  }

    return (

      <View style={styles.formContext}>
            <View style={styles.form}>


                 <TextInput 
                 style={styles.input}
                 value={Primeiranota}
                 placeholder='Digite a primeira nota.'
                 onChangeText={(int) => setPrimeiranota(int)}
                 maxLength={5}
                 />
                 
                 
                 <TextInput
                   style={styles.input}
                   value={Segundanota}
                   placeholder='Digite a segunda nota.'
                   onChangeText={(int) => setSegundanota(int)}
                   maxLength={5}
                 />


                 <TextInput
                   style={styles.input}   
                   value={Terceiranota}
                   placeholder='Digite a terceira nota.'
                   onChangeText={(int) => setTerceiranota(int)}
                   maxLength={5}
                 />

           <TouchableOpacity
            style={styles.buttonCalculator}
            activeOpacity={0.7}
            onPress={gerarResultado}>
            <Text style={styles.textbuttonCalculator}>Calcular Média <Icon name="thumbs-o-up" size={30} color="#000" />
            </Text>
           </TouchableOpacity>
 
            </View>

            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 

          <View>
			      	<Text style={styles.numberResult}>
				     	Total:
				    	{' '}
				    	{total.toFixed(1)}
			    	</Text>
			    	<Text style={styles.numberResult}>
			    		Média:
			    		{' '}
			    		{por.toFixed(1)}
		   	    </Text>
		    	</View>

			{por < 5 && por > 0 && (
				<Text style={styles.information}>Reprovado</Text>
			)}

			{por >= 5 && por < 7 && (
				<Text style={styles.information}>Recuperação</Text>
			)}

			{por >= 7 && (
				<Text style={styles.information}>Aprovado</Text>
			)}

      </View>

    );
  }