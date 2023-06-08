<template>
  <div class="chat-element">
    <div class="chat-content">
      <div v-for="(chat, index) in listChat" :key="index" :class="'chat-item ' + ((chat.role === ROLE_ADMIN) ? 'chat-item-1' : '')">
        <img :src="chat.avatar" alt="">
        <span>{{ chat.content }}</span>
      </div>
    </div>
    <div class="chat-input">
      <el-input
        type="textarea"
        :autosize="{ minRows: 1, maxRows: 5}"
        :placeholder="$t('chat.input_placeholder_send')"
        v-model="inputChat">
      </el-input>
      <div class="button-send">
        <img v-if="inputChat.length" src="~/assets/icons/icon_send_active.svg" alt="">
        <img v-else src="~/assets/icons/icon_send.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      listChat: [
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        },
        {
          role: 'user',
          avatar: 'assets/images/user_default.svg',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas. Nunc adipiscing tempor viverra et at. Eget sem odio pulvinar dignissim ac feugiat imperdiet sollicitudin.\n' +
            'Massa urna arcu eget nunc. Amet velit velit.'
        },
        {
          role: 'assistant',
          avatar: 'assets/images/avatar.png',
          content: 'Lorem ipsum dolor sit amet consectetur. Scelerisque urna ornare elit sed ac tincidunt leo ipsum sed. Eget curabitur aliquet nulla ultrices egestas at ornare. Sit fusce cras sed augue diam eget arcu egestas'
        }
      ],
      inputChat: '',
      ROLE_ADMIN: 'assistant'
    }
  },
  computed: {
    ...mapState({
      loading: state => state.loading
    })
  },
  methods: {}
}
</script>
