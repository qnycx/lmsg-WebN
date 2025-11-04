<template>
  <div class="not-found-wrapper">
    <div class="not-found-content">
      <img src="@/assets/images/error/404.png" alt="404 illustration" class="not-found-image" />
      <h1 class="not-found-title">Oops! 页面找不到了</h1>
      <p class="not-found-text">你访问的页面不存在或已被移除</p>
      <el-button type="primary" @click="goHome" class="home-button"> 返回首页 </el-button>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { ElButton } from 'element-plus';

  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };
</script>

<style scoped>
  .not-found-wrapper {
    height: 100vh;
    background: linear-gradient(135deg, #e0f7fa, #fce4ec);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .not-found-content {
    text-align: center;
    animation: fadeIn 1s ease-in-out;
  }

  .not-found-image {
    width: 320px;
    max-width: 80%;
    margin-bottom: 20px;
    animation: float 3s ease-in-out infinite;
  }

  .not-found-title {
    font-size: 36px;
    font-weight: 700;
    color: #333;
    margin-bottom: 10px;
  }

  .not-found-text {
    font-size: 18px;
    color: #666;
    margin-bottom: 30px;
  }

  .home-button {
    padding: 10px 24px;
    font-size: 16px;
    border-radius: 24px;
    transition: 0.3s;
  }

  .home-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(64, 158, 255, 0.3);
  }

  /* 浮动动画 */
  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0);
    }
  }

  /* 淡入动画 */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
