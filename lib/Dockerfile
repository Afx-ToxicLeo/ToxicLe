FROM quay.io/akash_ak_4/toxicleo
RUN git clone https://github.com/Afx-ToxicLeo/ToxicLeo /root/Leo/
WORKDIR /root/Leo/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
