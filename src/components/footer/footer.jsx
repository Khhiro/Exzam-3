
export default function Footer() {
  return (
    <div className="bg-[#1E1F25] w-[100%] md:h-[450px] h-[600px] md:pt-2 max-w-[1500px]">
      <div className="flex md:justify-between md:m-10 md:flex-nowrap flex-wrap justify-center mt-10">
        <img className="mb-10 md:mb-0" src="./src/assets/logo.svg" alt="" />
        <img src="./src/assets/inst-tg-wots.svg" alt="" />
      </div>
      <div className="flex space-x-10 md:justify-center mt-10">
        <ul className="text-gray-600 space-y-2">
          <p className="font-semibold text-base sm:text-[15px] md:text-xl">О компании</p>
          <li className="text-sm sm:text-base md:text-[15px]">Услуги</li>
          <li className="text-sm sm:text-base md:text-[15px]">Цены</li>
          <li className="text-sm sm:text-base md:text-[15px]">Отзывы</li>
          <li className="text-sm sm:text-base md:text-[15px]">Контакты</li>
          <li className="text-sm sm:text-base md:text-[15px]">Вакансии</li>
          <li className="text-sm sm:text-base md:text-[15px]">Соглашение о персональных данных</li>
          <li className="text-sm sm:text-base md:text-[15px]">Условия использования</li>
        </ul>

        <ul className="text-gray-600 space-y-2">
          <p className="font-semibold text-base sm:text-[15px] md:text-xl">Полезное</p>
          <li className="text-sm sm:text-base md:text-[15px]">Как работает наш сервис</li>
          <li className="text-sm sm:text-base md:text-[15px]">Как покупать с оператором</li>
          <li className="text-sm sm:text-base md:text-[15px]">Ответы на частые вопросы</li>
          <li className="text-sm sm:text-base md:text-[15px]">Популярные магазины</li>
          <li className="text-sm sm:text-base md:text-[15px]">Черный список магазинов</li>
          <li className="text-sm sm:text-base md:text-[15px]">Актуальные распродажи</li>
        </ul>

        <ul className="text-gray-600 space-y-2">
          <p className="font-semibold text-base sm:text-[15px] md:text-xl">Полезное</p>
          <li className="text-sm sm:text-base md:text-[15px]">Как работает наш сервис</li>
          <li className="text-sm sm:text-base md:text-[15px]">Как покупать с оператором</li>
          <li className="text-sm sm:text-base md:text-[15px]">Ответы на частые вопросы</li>
          <li className="text-sm sm:text-base md:text-[15px]">Популярные магазины</li>
          <li className="text-sm sm:text-base md:text-[15px]">Черный список магазинов</li>
          <li className="text-sm sm:text-base md:text-[15px]">Актуальные распродажи</li>
        </ul>
      </div>
    </div>
  )
}
