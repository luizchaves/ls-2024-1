import 'preline';
import '@iconify/iconify';

import Investments from './lib/investments';
import InvestmentForm from './components/InvestmentForm';
import Modal from './components/Modal';

import '../css/style.css';

InvestmentForm.create();

Modal.create();

Investments.load();
