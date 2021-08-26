import firebase from 'firebase/app';
import 'firebase/firestore'

const firestore =firebase.firestore();

firestore.collection('users').doc('aE6pvivoZDcTPL4ajdWO').collection('CartItems').doc('oTeNgYloTzX19Ciqmu7R')
firestore.doc('/users/aE6pvivoZDcTPL4ajdWO/CartItems/oTeNgYloTzX19Ciqmu7R');
firestore.collection('/users/aE6pvivoZDcTPL4ajdWO/CartItems');