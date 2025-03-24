<template>
    <div class="container pt-6 h-full">
        <div class="flex items-center space-x-6 h-full">
            <div class="pb-6 pt-2 pl-8 pr-14 bg-m_black-700 h-full rounded-lg flex flex-col space-y-6">
                <div class="w-full flex items-center justify-between pb-10">
                    <h2 @click="section = 1"
                        :class="[section == 1 ? 'text-m_yellow-100 border-b border-m_yellow-100 font-bold' : 'text-m_black-400 border-b border-m_black-400 font-medium']"
                        class="font-sf_pro text-base py-4 cursor-pointer mr-4 px-1">Чат</h2>
                    <h2 @click="section = 2"
                        :class="[section == 2 ? 'text-m_yellow-100 border-b border-m_yellow-100 font-bold' : 'text-m_black-400 border-b border-m_black-400 font-medium']"
                        class="font-sf_pro text-base py-4 ml-6 cursor-pointer px-1">Домашние задания</h2>
                </div>
                <div class="flex flex-col overflow-y-auto !mt-2 -ml-2 no-scrollbar">
                    <router-link v-for="(item, index) in users" :key="index" to="#"
                        class="flex items-center space-x-4 pl-2 py-3 hover:bg-m_black-400 rounded-lg">
                        <div class="w-12 h-12 rounded-full bg-m_black-400">
                            <img src="/imgs/person5.png" class="w-full h-full object-cover rounded-full">
                        </div>
                        <h2 class="font-sf_pro font-bold text-base text-white text-nowrap">Алиса Иванова</h2>
                    </router-link>
                </div>
            </div>
            <div class="flex-1 h-full flex flex-col bg-m_black-700 rounded-lg text-white">
                <!-- Header -->
                <div class="py-4 px-8 border-b border-m_gray-400 border-opacity-10 flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <svg class="px-2 py-3 w-[23px] cursor-pointer" viewBox="0 0 7 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.8">
                                <path
                                    d="M6.78832 10.4066L2.80142 6.00023L6.78832 1.59383L5.56091 0.240234L0.337891 6.00023L5.56091 11.7602L6.78832 10.4066Z"
                                    fill="white" />
                            </g>
                        </svg>
                        <h2 class="font-sf_pro text-lg font-medium">Маркес Браунли</h2>
                    </div>
                    <button class="text-gray-400 hover:text-red-500">
                        <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.1247 0.833379H10.8329V2.50014H0V0.833379H2.70823L3.48201 0H7.35092L8.1247 0.833379ZM2.321 15C1.46984 15 0.773438 14.25 0.773438 13.3332V3.3327H10.0588V13.3332C10.0588 14.25 9.36241 15 8.51125 15H2.321Z"
                                fill="white" />
                        </svg>
                    </button>
                </div>

                <!-- Chat Messages -->
                <div class="flex-1 overflow-y-auto p-4 space-y-6">
                    <!-- Incoming Message -->
                    <div class="flex items-end space-x-2">
                        <img src="/imgs/person5.png" alt="user" class="w-10 h-10 rounded-full">
                        <div class="bg-m_black-1000 py-4 px-3 rounded-tl-lg rounded-tr-lg rounded-br-lg max-w-md">
                            <p class="font-sf_pro font-normal text-sm leading-[25px]">
                                It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout.
                            </p>
                            <p class="text-xs text-gray-400 text-right mt-1">6:30 pm</p>
                        </div>
                    </div>

                    <!-- Outgoing Message -->
                    <div class="flex justify-end">
                        <div
                            class="bg-yellow-400 text-black py-4 px-3 rounded-tl-lg rounded-tr-lg rounded-bl-lg max-w-md">
                            <p class="font-sf_pro font-normal text-sm leading-[25px]">
                                There are many variations of passages of Lorem Ipsum available, but the majority
                                have suffered alteration in some form.
                            </p>
                            <p class="text-xs text-right mt-1">6:34 pm</p>
                        </div>
                    </div>

                    <!-- Incoming Message -->
                    <div class="flex items-end space-x-2">
                        <img src="/imgs/person5.png" alt="user" class="w-10 h-10 rounded-full">
                        <div class="bg-m_black-1000 py-4 px-3 rounded-tl-lg rounded-tr-lg rounded-br-lg max-w-md">
                            <p class="font-sf_pro font-normal text-sm leading-[25px]">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                            </p>
                            <p class="text-xs text-gray-400 text-right mt-1">6:38 pm</p>
                        </div>
                    </div>
                </div>

                <!-- Message Input -->
                <div class="p-4 border-t border-gray-400 border-opacity-10 flex items-center space-x-2">
                    <input v-model="message" @keydown.enter="sendMessage" type="text" placeholder="Write message"
                        class="flex-1 bg-transparent text-white rounded-lg p-2 focus:outline-none" />

                    <div class="flex items-center space-x-4">
                        <div class="relative w-5 h-10 flex items-center justify-center">
                            <div>
                                <fileIcon />
                            </div>
                            <input type="file" ref="fileInput" @change="handleFileUpload"
                                class="absolute cursor-pointer top-0 left-0 w-full h-full opacity-0" />
                        </div>

                        <div class="relative w-5 h-10 flex items-center justify-center">
                            <div>
                                <imageIcon />
                            </div>
                            <input type="file" accept="image/*" ref="imageInput" @change="handleImageUpload"
                                class="absolute cursor-pointer top-0 left-0 w-full h-full opacity-0" />
                        </div>

                        <button @click="sendMessage"
                            class="bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-500 flex items-center space-x-2">
                            <span>Send</span>
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.239 0.59375C12.6374 0.359375 13.1531 0.6875 13.0593 1.15625L11.3718 11.2812C11.3249 11.6562 10.9265 11.8672 10.5984 11.7266L7.69214 10.4844L6.19214 12.3125C5.86401 12.7109 5.20776 12.5 5.20776 11.9375V10.0391L10.8328 3.17188C10.9499 3.03125 10.7624 2.86719 10.6453 2.98438L3.9187 8.91406L1.41089 7.85938C0.989012 7.69531 0.942137 7.08594 1.36401 6.85156L12.239 0.59375Z"
                                    fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api/index';
import Sidebar from '@/components/admin/Sidebar.vue';
import AdminHeader from '@/components/admin/Header.vue'
import fileIcon from '@/components/icons/file.vue';
import imageIcon from '@/components/icons/img.vue';
export default {
    name: "Chat",
    components: {
        Sidebar,
        AdminHeader,
        fileIcon,
        imageIcon
    },
    created() {
        this.connectToWebSocket()
    },
    data() {
        return {
            socket: null,
            selectedFile: null,
            selectedImage: null,
            message: null,
            section: 1,
            users: [
                {
                    id: 1,
                    name: 'Jukkoe Sisao',
                    img: '/imgs/person4.png',
                    email: 'sibyl_kozey@gmail.com',
                    ratin: 4.8
                },
                {
                    id: 2,
                    name: 'Jukkoe Sisao',
                    img: '/imgs/person4.png',
                    email: 'sibyl_kozey@gmail.com',
                    ratin: 4.8
                },
                {
                    id: 3,
                    name: 'Jukkoe Sisao',
                    img: '/imgs/person4.png',
                    email: 'sibyl_kozey@gmail.com',
                    ratin: 4.8
                },
            ]
        }
    },
    methods: {
        async handleFileUpload(event) {
            this.selectedFile = event.target.files[0]
        },
        async handleImageUpload(event) {
            this.selectedImage = event.target.files[0]
        },
        async sendMessage() {
            if (this.selectedFile) {
                const formData = new FormData();
                formData.append('path', this.selectedFile);
            }
            if (this.selectedImage) {
                const formData = new FormData();
                formData.append('path', this.selectedImage);
            }
        },
        // 
        async connectToWebSocket() {
            this.socket = new WebSocket('wss://0-100.community/ws/chat/')

            this.socket.onopen = () => {
                console.log('WebSocket connection established')
            }

            this.socket.onerror = (error) => {
                console.error('WebSocket error:', error)
            }

            this.socket.onmessage = (event) => {
                const data = JSON.parse(event.data).message
                this.receivedMessages.push(data)
                this.$nextTick(() => {
                    this.scrollToBottom()
                })
            }

            this.socket.onclose = () => {
                console.log('WebSocket connection closed')
            }
        },
        async loadUserlist() {
            try {
                const response = await api.get('/users/?limit=1000000')
                this.users = response.data.results.map(user => ({
                    id: user.id,
                    phone: user.phone,
                    username: user.name,
                    firstLetter: user.name.charAt(0).toUpperCase(),
                }))
            } catch (error) {
                console.error('Error loading user list:', error)
            }
        },
        async sendMessage() {
            if (this.userId && this.socket.readyState === WebSocket.OPEN && (this.newMessage || this.uploads.length > 0)) {
                const message = JSON.stringify({
                    type: "send_message",
                    data: {
                        receiver: this.userId,
                        text: this.newMessage,
                        attachments: [...this.uploads],
                    },
                })
                console.log(message)
                this.socket.send(message)
                this.newMessage = ''
                this.uploads = []
                this.$nextTick(() => {
                    this.scrollToBottom()
                })
            } else {
                console.error('WebSocket is not connected or message is empty.')
            }
        },
        async getMessages() {
            const response = await api.get(`/chat/messages/?user=${this.userId}&limit=100&offset=${this.offset}`, {
                headers: {
                    'Authorization': 'Token 11477de63fe7151e22f7c0a5af7d7242cb4bddf6'
                }
            })
            console.log(response);
            this.receivedMessages = response.data.results.reverse()
            this.msg_count = response.data.count
            if (this.msg_count > 100) { this.prev = true }
            this.$nextTick(() => {
                this.scrollToBottom()
            })
        },
        async previusDownload() {
            this.offset = this.offset + 100
            const response = await api.get(`/chat/messages/?user=${this.userId}&limit=100&offset=${this.offset}`, {
                headers: {
                    'Authorization': 'Token 11477de63fe7151e22f7c0a5af7d7242cb4bddf6'
                }
            })
            this.receivedMessages.unshift(...response.data.results.reverse())
            if (this.receivedMessages.length >= this.msg_count) {
                this.prev = false
            }
        },
    }
}
</script>