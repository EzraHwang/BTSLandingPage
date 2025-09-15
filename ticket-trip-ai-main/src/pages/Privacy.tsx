import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { i18n } = useTranslation();
  const isChineseLanguage = i18n.language === 'zh';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-foreground text-background py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold">Ticketrip</h1>
          </div>
        </div>
      </header>

      {/* Privacy Content */}
      <main className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          {isChineseLanguage ? (
            // Chinese Content
            <div className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold text-foreground mb-8">Ticketrip 隱私權政策</h1>
              <p className="text-lg text-muted-foreground mb-8">本隱私權政策說明 Ticketrip 如何蒐集、使用、儲存與保護您的個人資料。</p>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">我們蒐集哪些資料</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>姓名</li>
                  <li>電子郵件地址</li>
                  <li>電話號碼</li>
                  <li>護照號碼</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">資料的使用方式</h2>
                <p className="text-muted-foreground mb-4">我們蒐集這些資料的目的包含但不限於：</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>處理旅遊票券預訂與用戶識別</li>
                  <li>提供帳號註冊與登入功能</li>
                  <li>聯繫用戶通知訂單狀態</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">第三方支付服務</h2>
                <p className="text-muted-foreground mb-4">
                  為完成訂單支付，Ticketrip 會與第三方支付平台（例如：Stripe 等）合作。<br />
                  在使用付款功能時，您可能需要輸入信用卡或其他付款資訊，這些資料會直接由支付平台加密處理，我們不會儲存您的完整付款資訊。<br />
                  各第三方服務之隱私政策，請參考以下連結：
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Stripe Privacy Policy</a></li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">資料保留與使用者資料權利</h2>
                <p className="text-muted-foreground">
                  我們將保留您的個人資料最多 90 天，除非法令另有規定或使用者提出資料刪除要求。<br />
                  使用者僅能透過 App 查看個人所購買的票券資訊，無法直接修改或存取其他個人資料。若您需查詢或刪除您的資料，請聯絡我們客服信箱，我們將在合理時間內處理。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">支付幣別與歐盟用戶資料處理聲明</h2>
                <p className="text-muted-foreground">
                  本 App 主要以歐元（EUR）作為支付幣別，並可能服務來自歐盟的用戶。對於歐盟使用者的個人資料處理方式，我們將依據 GDPR 原則妥善管理與保護您的資訊。如需瞭解更多，歡迎與我們聯繫。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">第三方資料分享</h2>
                <p className="text-muted-foreground">我們不會在未經您同意的情況下，與任何第三方分享您的個人資訊，除非法律要求。</p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">資料保護</h2>
                <p className="text-muted-foreground">我們採用業界標準的安全措施來保護您的個人資料，包括傳輸加密與伺服器權限控管。</p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">兒童隱私</h2>
                <p className="text-muted-foreground">本 App 不針對 13 歲以下兒童設計，也不會刻意蒐集其個人資料。</p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">隱私政策變更</h2>
                <p className="text-muted-foreground">若本政策有任何變更，我們會於此頁面更新並通知用戶。</p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">聯絡我們</h2>
                <p className="text-muted-foreground">如對本政策有任何疑問，請聯絡我們：<a href="mailto:support@ticketrip.app" className="text-primary hover:underline">support@ticketrip.app</a></p>
              </section>
            </div>
          ) : (
            // English Content
            <div className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold text-foreground mb-8">Ticketrip Privacy Policy</h1>
              <p className="text-lg text-muted-foreground mb-8">This policy describes how Ticketrip collects, uses, stores, and protects your personal information.</p>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Passport number</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Data</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>To process ticket bookings and identify users</li>
                  <li>To provide account registration and login</li>
                  <li>To send booking status and important updates</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Third-party Payment Providers</h2>
                <p className="text-muted-foreground mb-4">
                  To complete booking payments, Ticketrip integrates with third-party payment providers such as Stripe.<br />
                  When using the payment feature, you may be required to enter payment information such as your credit card details. This information is securely processed directly by the payment providers; Ticketrip does not store your full payment information.<br />
                  For more details, refer to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Stripe Privacy Policy</a></li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention & User Access Rights</h2>
                <p className="text-muted-foreground">
                  We retain your personal data for up to <strong>90 days</strong>, unless longer retention is required by applicable law or a user requests earlier deletion.<br />
                  Users can only view their own purchased ticket information via the app. No direct access or editing of personal data is provided. For data access or deletion requests, please contact our support team and we will respond within a reasonable timeframe.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Payment Currency & EU User Statement</h2>
                <p className="text-muted-foreground">
                  This app primarily processes payments in <strong>Euro (EUR)</strong> and may serve users located in the <strong>European Union</strong>. Personal data of EU users is handled in accordance with <strong>GDPR principles</strong>, and we are committed to protecting your data rights. Please contact us if you have any questions.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Sharing</h2>
                <p className="text-muted-foreground">We do not share your personal data with third parties without your consent, except as required by law.</p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Protection</h2>
                <p className="text-muted-foreground">We use industry-standard security measures including encrypted data transmission and server access controls.</p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground">This app is not intended for children under the age of 13, and we do not knowingly collect their information.</p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Policy Updates</h2>
                <p className="text-muted-foreground">We will notify users of any changes to this policy on this page.</p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground">If you have any questions, contact us at: <a href="mailto:support@ticketrip.app" className="text-primary hover:underline">support@ticketrip.app</a></p>
              </section>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">© 2025 Ticketrip. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;