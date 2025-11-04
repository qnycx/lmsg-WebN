<template>
  <div class="container">
    <div class="left-container">
      <div class="left-content">
        <div class="info">
          <span class="AppName">LiteMsg</span>
          <span class="AppDesc">一个轻量化的聊天程序</span>
        </div>
      </div>
      <div class="Contact">
        <a
          class="github"
          href="https://github.com/qnycx"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" width="50" height="50" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.93c.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.38-3.87-1.38-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.05 1.8 2.76 1.28 3.43.98.11-.77.41-1.28.75-1.57-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.81 1.07.81 2.17v3.22c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="right-container">
      <div class="master">
        <div class="brand">
          <img src="@/assets/images/cs.jpg" class="brand-mark" alt="logo" />
          <span class="brand-name">By:AeroX</span>
        </div>
        <div class="card-verify">
          <h2 class="card-title">欢迎回来</h2>
          <p class="card-sub">请输入您的群聊密码</p>
          <form class="Verify-form">
            <div class="group">
              <label for="password">密码</label>
              <input type="password" id="password" placeholder="请输入密码" required />
            </div>
            <button type="submit" class="verify-btn">验证</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
  }

  .left-container {
    background: linear-gradient(135deg, #aba4ad 0%, #3225eb 50%, #d946ef 100%);
    flex: 1;
    position: relative;
  }

  .left-content {
    display: flex;
    justify-content: space-between;
    margin: 35px;
  }

  .info {
    display: flex;
    color: white;
    flex-direction: column;
    gap: 10px; /* 添加间距 */
    align-items: center;
    justify-content: center;
  }

  .AppName {
    font-size: 36px;
    font-weight: bold;
  }

  .AppDesc {
    font-size: 24px;
  }

  .Contact {
    position: absolute;
    top: 40px;
    right: 20px;
  }

  .github {
    color: black;
  }

  .right-container {
    flex: 1;
    background: aliceblue;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
  }

  .master {
    display: flex;
    flex-direction: column;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 20px;
  }

  /* 小图片区域 */
  .brand-mark {
    width: 32px;
    height: 32px;
    background-size: cover;
    background-position: center;
    border-radius: 6px;
  }

  /* 文本样式 */
  .brand-name {
    font-size: 20px;
    font-weight: 600;
    color: #1e293b;
  }

  .card-verify {
    background: white;
    padding: 20px;
    border-radius: 16px;
    height: 400px;
    width: 300px;
  }

  .card-title {
    font-size: 26px;
    margin: 2px;
    padding: 1px;
  }
</style>
