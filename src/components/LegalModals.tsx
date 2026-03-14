import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface LegalModalsProps {
  type: 'privacy' | 'offer';
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LegalModal({ type, open, onOpenChange }: LegalModalsProps) {
  if (type === 'privacy') {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Политика конфиденциальности</DialogTitle>
            <DialogDescription>Дата последнего обновления: 01 января 2026 г.</DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <h3 className="text-base font-semibold text-foreground">1. Общие положения</h3>
              <p>
                Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты
                персональных данных физических лиц, обратившихся за услугами компании Lea Citizenship Center
                (далее — «Компания», «мы»).
              </p>
              <p>
                Используя наш сайт и предоставляя свои персональные данные, вы соглашаетесь с условиями данной
                Политики.
              </p>

              <h3 className="text-base font-semibold text-foreground">2. Какие данные мы собираем</h3>
              <p>Мы можем собирать следующие категории персональных данных:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Фамилия, имя, отчество</li>
                <li>Контактный телефон и адрес электронной почты</li>
                <li>Данные о гражданстве и миграционном статусе</li>
                <li>Информация, добровольно предоставленная через формы обратной связи</li>
                <li>Технические данные (IP-адрес, тип браузера, cookies)</li>
              </ul>

              <h3 className="text-base font-semibold text-foreground">3. Цели обработки данных</h3>
              <p>Персональные данные обрабатываются в следующих целях:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Оказание консультационных и миграционных услуг</li>
                <li>Связь с клиентом для уточнения деталей заявки</li>
                <li>Улучшение качества обслуживания и работы сайта</li>
                <li>Выполнение требований законодательства</li>
              </ul>

              <h3 className="text-base font-semibold text-foreground">4. Защита данных</h3>
              <p>
                Мы принимаем все необходимые организационные и технические меры для защиты персональных данных
                от несанкционированного доступа, изменения, раскрытия или уничтожения. Доступ к персональным
                данным имеют только уполномоченные сотрудники.
              </p>

              <h3 className="text-base font-semibold text-foreground">5. Передача данных третьим лицам</h3>
              <p>
                Мы не передаём персональные данные третьим лицам без согласия субъекта данных, за исключением
                случаев, предусмотренных законодательством, а также для выполнения договорных обязательств
                (например, передача документов в консульства и миграционные органы).
              </p>

              <h3 className="text-base font-semibold text-foreground">6. Хранение данных</h3>
              <p>
                Персональные данные хранятся в течение срока, необходимого для достижения целей обработки,
                но не менее срока, установленного законодательством. По истечении срока данные удаляются
                или обезличиваются.
              </p>

              <h3 className="text-base font-semibold text-foreground">7. Права субъекта данных</h3>
              <p>Вы имеете право:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Запросить информацию о своих персональных данных</li>
                <li>Потребовать их исправления или удаления</li>
                <li>Отозвать согласие на обработку данных</li>
                <li>Обратиться в надзорный орган при нарушении ваших прав</li>
              </ul>

              <h3 className="text-base font-semibold text-foreground">8. Контактная информация</h3>
              <p>
                По вопросам обработки персональных данных вы можете связаться с нами по адресу:
                info@lcc.ru или по телефону +7 (800) 000-00-00.
              </p>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Договор публичной оферты</DialogTitle>
          <DialogDescription>Дата последнего обновления: 01 января 2026 г.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <h3 className="text-base font-semibold text-foreground">1. Общие положения</h3>
            <p>
              Настоящий документ является официальным предложением (публичной офертой) компании
              Lea Citizenship Center (далее — «Исполнитель») заключить договор на оказание
              консультационных и миграционных услуг с любым физическим или юридическим лицом
              (далее — «Заказчик»).
            </p>
            <p>
              Акцептом оферты является подача заявки через сайт, оплата услуг или подписание
              дополнительного соглашения.
            </p>

            <h3 className="text-base font-semibold text-foreground">2. Предмет договора</h3>
            <p>
              Исполнитель обязуется оказать Заказчику консультационные услуги в сфере миграционного
              права, включая, но не ограничиваясь:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Консультации по вопросам получения виз, ВНЖ, ПМЖ и гражданства</li>
              <li>Подготовка и проверка пакета документов</li>
              <li>Сопровождение процедуры подачи документов в уполномоченные органы</li>
              <li>Информационная поддержка на всех этапах процесса</li>
            </ul>

            <h3 className="text-base font-semibold text-foreground">3. Стоимость и порядок оплаты</h3>
            <p>
              Стоимость услуг определяется в индивидуальном порядке и фиксируется в дополнительном
              соглашении. Оплата производится в рублях РФ или иной валюте по согласованию сторон.
              Возможна поэтапная оплата.
            </p>

            <h3 className="text-base font-semibold text-foreground">4. Обязанности сторон</h3>
            <p><strong className="text-foreground">Исполнитель обязуется:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Оказать услуги качественно и в согласованные сроки</li>
              <li>Информировать Заказчика о ходе выполнения работ</li>
              <li>Обеспечить конфиденциальность предоставленных данных</li>
            </ul>
            <p><strong className="text-foreground">Заказчик обязуется:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Предоставить достоверные и полные документы и сведения</li>
              <li>Своевременно оплачивать услуги Исполнителя</li>
              <li>Содействовать Исполнителю в получении необходимой информации</li>
            </ul>

            <h3 className="text-base font-semibold text-foreground">5. Ответственность сторон</h3>
            <p>
              Исполнитель не несёт ответственности за отказ государственных органов в выдаче визы,
              ВНЖ или гражданства, если все документы были подготовлены надлежащим образом. В случае
              отказа по вине Исполнителя, Заказчику возвращается оплата за услуги в полном объёме.
            </p>

            <h3 className="text-base font-semibold text-foreground">6. Возврат средств</h3>
            <p>
              Заказчик вправе отказаться от услуг до начала их оказания с полным возвратом оплаты.
              При отказе после начала оказания услуг возврат производится за вычетом стоимости
              фактически оказанных услуг.
            </p>

            <h3 className="text-base font-semibold text-foreground">7. Срок действия</h3>
            <p>
              Договор вступает в силу с момента акцепта оферты и действует до полного выполнения
              сторонами своих обязательств.
            </p>

            <h3 className="text-base font-semibold text-foreground">8. Разрешение споров</h3>
            <p>
              Все споры и разногласия разрешаются путём переговоров. При невозможности достижения
              соглашения спор передаётся на рассмотрение в суд по месту нахождения Исполнителя.
            </p>

            <h3 className="text-base font-semibold text-foreground">9. Реквизиты</h3>
            <p>
              Lea Citizenship Center<br />
              Email: info@lcc.ru<br />
              Телефон: +7 (800) 000-00-00
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
