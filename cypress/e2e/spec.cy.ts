describe('template spec', () => {
  it('Xが勝ったらWinner: Xと出る', () => {
    cy.visit('/')
    const squares = cy.get('.square')
    squares.should('have.length', 3 * 3) //マス目は9であるべき
    const playerX = [0, 4, 8] // クリックするマス目のインデックス
    const playerO = [3, 6, 7]
    const playIndexes = mergeIndexes(playerX, playerO)
    playIndexes.map((i) => {
      cy.get('.square').eq(i).click(squares[i])
    })
    const status = cy.get('.status')
    status.contains('Winner: X')
  })
  it('引き分けはDraw!と出る', () => {
    cy.visit('/')
    const squares = cy.get('.square')
    squares.should('have.length', 3 * 3)
    const playerX = [1, 3, 4, 6, 8]
    const playerO = [0, 2, 5, 7]
    const playIndexes = mergeIndexes(playerX, playerO)
    playIndexes.map((i) => {
      cy.get('.square').eq(i).click(squares[i])
    })
    const status = cy.get('.status')
    status.contains('Draw!')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('CypressStadioCode', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get('.game-board > :nth-child(2) > :nth-child(1)').click();
    cy.get(':nth-child(2) > :nth-child(3)').click();
    cy.get(':nth-child(3) > :nth-child(2)').click();
    cy.get(':nth-child(4) > :nth-child(1)').click();
    cy.get(':nth-child(3) > :nth-child(1)').click();
    cy.get(':nth-child(3) > :nth-child(3)').click();
    cy.get(':nth-child(2) > :nth-child(2)').click();
    cy.get(':nth-child(4) > :nth-child(2)').click();
    cy.get(':nth-child(4) > :nth-child(3)').click();
    /* ==== End Cypress Studio ==== */
  });
})

// インデックスを交互にマージ
const mergeIndexes = (playerX: number[], playerO: number[]) => {
  const mergedArray: number[] = []

  for (let i = 0; i < Math.max(playerX.length, playerO.length); i++) {
    if (playerX[i] !== undefined) {
      mergedArray.push(playerX[i])
    }
    if (playerO[i] !== undefined) {
      mergedArray.push(playerO[i])
    }
  }
  return mergedArray
}
