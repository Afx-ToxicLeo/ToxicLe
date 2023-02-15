FROM quay.io/afx-abu/abu-md
RUN git clone https://github.com/Afx-ToxicLeo/ToxicLeo /root/Leo/
WORKDIR /root/Leo/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
