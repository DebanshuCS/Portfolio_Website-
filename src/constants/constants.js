import { withTheme } from "styled-components";

export const projects = [
  {
    title: "AgeWise.ai",
    description: "Developed AgeWise, a facial recognition project that predicts a person’s age range based on their facial features. Achieved competitive accuracy by applying superior Deep Learning approaches and the possibility to customize skincare products. The model was developed using Machine Learning and Deep Learning and hence we were able to detect dark spots, puffy eyes and wrinkles on images in order to understand ageing signs.",
    color: withTheme,
    tags: ["Image preprocessing", "CNN", "Feature extraction","Deep Learning"],
    visit: "https://github.com/DebanshuCS/Ageing-signs-Identification-",
  },
  {
    title: "VLANfinity",
    description: "Efficiently revamped our campus Networking structure and included configuration of VLANs on all switches, the assignment of network devices to specific VLANs, and the implementation of proper VLAN tagging was done.The primary goal was to create a network that is both secure and well-organized, while also maintaining high performance and availability. Users of all regions will have access to the server and can communicate without creating congestion in the Network.",
    color: withTheme,
    tags: [, "VLAN" , "Routing", "Cisco Packet Tracer"],
    visit: "https://github.com/DebanshuCS/VLAN-Implementation",  
  },
  {
    title: "EndemiCast",
    description:"Epidemic models based on ordinary differential equations, which effectively describe dynamic systems in many fields of science. As part of this project, US population data was utilized to model the potential spread of the coronavirus. Integrated state-of-the-art machine learning techniques and state estimation algorithms to better understand the dynamics of the pandemic system.",
    tags: ["Statistical modeling", "Regression", "Random Forest", "Epidemiology"],
    visit: " https://deepnote.com/@debcs/Epidemic-Modelling-723c9eb1-0082-4202-85c7-a213bd467247",  
  },
  {
    title: "CredSense",
    description:
      "During the online application process, the company seeks to automate (in real time) the loan qualification process based on the information entered by the customer. ML models will help the company predict loan approvals, thereby speeding up the decision-making process for determining whether or not an applicant is eligible for a loan.",

    tags: ["Decision trees", "Random Forest", "Naive Bayes"],
    visit: "https://deepnote.com/@debcs/Credit-Forecaster-f44f8e1b-c39d-4a9a-bd92-fb144cdef579",  
  },
  {
    title: "HR Planes",
    description:"Designed a novel object detection model to automatically detect airplanes in high-resolution satellite images, using Google Earth imagery under various landscape, seasonal, and satellite geometry conditions. The dataset was evaluated using two state-of-the-art object detection methods. Incorporated advanced techniques such as hyperparameter tuning, optimization algorithm, and data augmentation to improve model precision. Attained excellent accuracy of 80.27% with training. Intended to accomplish reliable and accurate airplane detection capabilities.",
    tags: ["YOLOv7", "Faster RCNN", "Hyperparameter tuning"],
    visit: "https://github.com/DebanshuCS/Deep-Learning_RCNN",  
  },
  {
    title: "TransLingua",
    description:"This enthralling project involves constructing a neural machine translation model with large-scale parallel corpora by using an intuitive method, sequence-to-sequence learning approach consisting encoder-decoder LSTMs(Long Short-Term Memory) network architecture, RNN(Recurrent Neural Network) and word embedding. The model secured an outstanding translation accuracy along with minimizing the loss function eminently.",
    tags: ["RNN (Recurrent Neural Network)", "LSTM network", "NLP", "Seq2Seq learning"],
    visit: "https://github.com/DebanshuCS/Deep_Learning_Seq2Seq",  
  },


];


export const TimeLineData = [
  { year: 2019, text: "I Started my bachelor's degree in the field of CS from XIM University, SCSE." },
  {
    year: 2020,
    text: "I Acquired diverse programming language proficiency and skills during my college education.",
  },
  {
    year: 2021,
    text: " I successfully completed my inaugural internship in the field of Data Science.",
  },
  {
    year: 2022,
    text: "I have accomplished over 13 projects in the field of deep learning and machine learning, fostering my expertise and capability in this domain.",
  },
  { year: 2023, text: " I have achieved the successful completion of my thesis on rumor detection using deep learning, demonstrating my proficiency in this specialized area of research." },
];
